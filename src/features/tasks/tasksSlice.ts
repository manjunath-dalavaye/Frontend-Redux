// src/features/tasks/tasksSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Task { // Export the Task interface
  id: number;
  title: string;
}

interface TasksState {
  list: Task[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TasksState = {
  list: [],
  status: 'idle',
};

interface AddTaskPayload {
  title: string;
}

export const addTask = createAsyncThunk<Task, AddTaskPayload>(
  'tasks/addTask',
  async (task: AddTaskPayload, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error('Failed to add task');
      }
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.status = 'idle';
      })
      .addCase(addTask.rejected, (state, action) => {
        console.error('Failed to add task:', action.payload);
        state.status = 'failed';
      });
  },
});

export default tasksSlice.reducer;
