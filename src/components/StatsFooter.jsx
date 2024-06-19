import React from 'react'

const StatsFooter = ({toDoList}) => {
 
  const totalList = toDoList.length;
  return (
    <div className="stats">
      <p className="notify">
        {totalList === 0
          ? "You got everything! Ready to go ✈️"
          : `you have ${totalList} items on your list.`}
      </p>
    </div>
  );
}

export default StatsFooter
