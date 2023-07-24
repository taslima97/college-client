

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-3/12 mx-auto text-center my-8">
           <p className="text-sky-500 mb-4">---{subHeading}---</p> 
           <h3 className="text-2xl uppercase border-y-4 py-5">{heading}</h3>
        </div>
    );
};

export default SectionTitle;