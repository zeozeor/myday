
const SelectBox = ({handleSelected}) => {
  const categories = ["HTML","CSS","JS","REACT","DB"];
  return (
    <ul>
      {
        categories.map((item,idx)=>{
          return <li key={idx}
                     onClick={()=>{
                      handleSelected(item);
                     }}>{item}</li>;
        })
      }
    </ul>
  );
};

export default SelectBox;