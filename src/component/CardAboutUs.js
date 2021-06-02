const CardAboutUs = ({ nama, nim, linkedin, github }) => {
    if (!linkedin) linkedin = "#";
    if (!github) github = "#";
    return (
        <div className="mx-6 flex items-center md:mb-16 mb-8">
            <img src={`https://picsum.photos/80?${nama[0]}`} alt={nama}
                className="rounded-full mr-5 border-2 border-green-300 shadow-md" width="80" height="80"
                data-aos="flip-right" />
            <div>
                <p className="mt-1 text-xl text-green-900">{nama}</p>
                <p className="text-gray-700 text-md">{nim} - 3SD1</p>
                <div className="text-xl mt-1">
                    <a href={linkedin} target={linkedin !== "#" ? '_blank' : ''}><i className="fab fa-linkedin text-blue-600 mr-2"></i></a>
                    <a href={github} target={github !== "#" ? '_blank' : ''}><i className="fab fa-github-square text-gray-800"></i></a>
                </div>
            </div>
        </div>
    );
}

export default CardAboutUs;