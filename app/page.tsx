import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import ProjectList from './_components/ProjectList';
import Contact from './_components/Contact';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <ProjectList />
            <Contact />
        </div>
    );
}
