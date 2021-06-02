import CardAboutUs from './CardAboutUs';

const FourthLanding = () => {
    const tim = [
        {
            nama: 'Almira Diva Sanya',
            nim: '221810155',
            linkedin: 'https://www.linkedin.com/in/almira-diva-sanya-0323b41b4/'
        },
        {
            nama: 'Cynthia As Bahri',
            nim: '221810227',
        },
        {
            nama: 'Eko Putra Wahyuddin',
            nim: '221810259',
            linkedin: 'https://www.linkedin.com/in/eko-putra-wahyuddin-4a150a176/',
            github: 'https://github.com/ekoptra'
        },
        {
            nama: 'Fahmi Reza Nugraha',
            nim: '221810280',
        },
        {
            nama: 'I Putu Juni Adi Widianata',
            nim: '221810333',
        },
        {
            nama: 'Nensi Fitriani',
            nim: '221810499',
            linkedin: 'https://www.linkedin.com/in/nensi-fitriani-582a431b2/'
        },
    ]
    return (
        <div className="container-fourth md:px-10 px-5 py-10 pb-16" id="about-us">
            <h5 className="text-center font-medium text-2xl">About Us</h5>
            <hr className="my-3 border-green-300 w-32 bg-green-300 mx-auto"></hr>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center">
                {tim.map((t, i) => {
                    return <CardAboutUs {...t} key={i} />;
                })}
            </div>
        </div>
    );

}

export default FourthLanding;