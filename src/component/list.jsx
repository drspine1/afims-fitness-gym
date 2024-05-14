import SingleItem  from "./singleItem";
const List = ({people}) => {
  return ( 
    <>
    <div>
      {people.map((quest) =>{
        return <SingleItem {...quest} key={quest.id}/>
      })}
    </div>
    </>
   );
}
 
export default List;