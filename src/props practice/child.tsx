
interface props{
    namie:string,
    age:number
}


const Child: React.FC<props>=({namie,age})=>
{
    return(
    <>
    <h2>name:{namie}, age:{age}</h2>
    </>
    );
}

export default Child;