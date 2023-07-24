
import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const Recarch = () => {
    const [papers, setPapers] = useState([])
    // console.log(papers)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPapers(data))
    }, [])
    return (
        <>
        <SectionTitle heading={'College Students Research Papers'}></SectionTitle>
        <div className="flex justify-between items-center mb-10">
            {
                papers.map(paper => (
                    
                    <li key={paper.id}>
                        <a href={paper.link} target="_blank" rel="noopener noreferrer">
                            <img className="h-32" src={paper.img} alt="" />
                            {paper.title}

                        </a>
                    </li>
                ))
            }
        </div>
        </>
    );
};

export default Recarch;