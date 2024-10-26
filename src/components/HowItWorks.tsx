
const HowItWorks = () => {
  return (
    <div className="flow min-h-[55vh] bg-white rounded-[14px] mx-[3rem] my-0 text-center pt-[1rem] shadow-[rgba(0,0,0,0.35)_0px_5px_15px]">
      <h1 className="text-[3rem]" style={{ fontSize: "1.7rem", fontWeight: "600" }}>How it works</h1>
      <div className="steps flex justify-around flex-wrap mt-[1.5rem] pb-[1rem]">
        <div className="text-white step  w-[20%] m-[1rem] p-[1rem] rounded-[14px] min-w-[238px] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px] bg-redbg">
          <h1><b className="underline">Create a Campaign</b></h1>
          Sign up and start a campaign by sharing your educational goals, funding needs, and personal story.
        </div>
        <div className="text-black step  w-[20%] m-[1rem] p-[1rem] rounded-[14px] min-w-[238px] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px] bg-lightredbg ">
          <h1><b className="underline">Spread the Word</b></h1>
          Use social media and other channels to share your campaign with friends, family, and supporters.
        </div>
        <div className="text-white step  w-[20%] m-[1rem] p-[1rem] rounded-[14px] min-w-[238px] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px] bg-redbg">
          <h1><b className="underline">Receive Donations</b></h1>
          Contributors support your campaign, and donations go directly towards your educational expenses.
        </div>
        <div className="text-black step  w-[20%] m-[1rem] p-[1rem] rounded-[14px] min-w-[238px] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px] bg-lightredbg">
          <h1><b className="underline">Achieve Your Goals</b></h1>
          Use the funds raised to pay for your educational journey and share updates with your supporters!
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
