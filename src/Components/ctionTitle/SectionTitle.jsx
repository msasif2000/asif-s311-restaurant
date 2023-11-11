

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-6/12 mx-auto">
            <p className="text-yellow-500 italic py-2">{subHeading}</p>
            <h3 className="text-3xl py-2 border-y-4 mx-auto mb-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;