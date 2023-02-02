import HomePanel from "../shared/components/HomePanel/HomePanel"
import Main from "../shared/components/Main/Main"
import SideMenu from "../shared/components/SideMenu/SideMenu"

const Home = () => {
    return (
        <Main bgColor="#F3F3F3">
            <SideMenu />
            <HomePanel />
        </Main>
    )
}

export default Home