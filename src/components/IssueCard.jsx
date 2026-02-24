import { toast } from 'react-toastify';
import Container from '../Container';
import calendarPng from '../assets/ri_calendar-line.png'
// import { useState } from 'react';




const IssueCard = ({ issueData, mainData, selectData, setSelectData }) => {

  // const [isSelected, setSelected] = useState(false);


  const handleClick = (id) => {
    // if (isSelected) { return; } // stop multiple clicks
     if (selectData.some(item => item.id === id)) {
    toast.warning(<div className='text-yellow-400'>Already selected!!</div>);
    return;
  }

    const currentData = mainData.filter(res => res.id === id);
    setSelectData([...selectData, ...currentData]);
    toast.success(<div className='text-green-400'>In Progress!!</div>)
    // setSelected(true);
  }


  return (
    <div className='   '>
      {/* card  */}
      <div onClick={() => handleClick(issueData.id)} className="cursor-pointer rounded-lg p-4 bg-white shadow-xl h-[100%] w-[100%]">
        <div className="flex justify-between items-center ">
          <h1 className="font-bold text-[.8rem]">{issueData.title}</h1>
          <button className={`flex gap-1 items-center justify-between ${issueData.status === 'Open' ? 'bg-green-100 text-green-700' : issueData.status === 'In Progress' && 'bg-amber-100 text-amber-500'} font-semibold rounded-3xl py-1 px-2 text-[.6rem] `}><span className={`h-2 w-2 rounded-full ${issueData.status === 'Open' ? 'bg-green-700' : issueData.status === 'In Progress' && 'bg-amber-500'}`}></span>{issueData.status}</button>
        </div>
        <p className="text-gray-400 text-[.7rem] mt-3">{issueData.description}</p>
        <div className="flex justify-between items-center text-xs">
          <div className="flex gap-2 items-center">
            <p>#{issueData.id}</p>
            <h3 className={`${issueData.priority === "HIGH PRIORITY" ? 'text-red-500' : issueData.priority === "MEDIUM PRIORITY" ? 'text-yellow-500' : issueData.priority === "LOW PRIORITY" && 'text-green-500'} font-semibold`}>{issueData.priority}</h3>
          </div>
          <div className="flex gap-2 items-center mt-4">
            <p>{issueData.customer} </p>
            <h3 className='flex justify-center items-center gap-1'><img src={calendarPng} alt="calendar" />{issueData.createdAt}</h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IssueCard;