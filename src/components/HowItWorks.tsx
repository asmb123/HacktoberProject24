import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="flow min-h-[55vh] bg-white rounded-[14px] mx-[3rem] my-0 text-center pt-[1rem] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] ">
      <h1 className="text-[3rem]" style={{ fontSize: "1.7rem", fontWeight: "600" }}>How it works</h1>
      <div className="steps flex justify-around flex-wrap mt-[1.5rem] pb-[1rem]">
        <div className="step  w-[20%] m-[1rem] p-[1rem] rounded-[14px] min-w-[238px] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px] bg-yellow-400">
         <h1>1</h1> 
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        </div>
        <div className="step  w-[20%] m-[1rem] p-[1rem] rounded-[14px] min-w-[238px] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px] bg-green-400 ">
        <h1>2</h1> 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse harum
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        </div>
        <div className="step  w-[20%] m-[1rem] p-[1rem] rounded-[14px] min-w-[238px] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px] bg-purple-500">
        <h1>3</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        </div>
        <div className="step  w-[20%] m-[1rem] p-[1rem] rounded-[14px] min-w-[238px] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px] bg-orange-300">
        <h1>4</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
