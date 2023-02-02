import Card from "../Card/Card"
import Header from "../Header/Header"
import { HomePanelWrapper } from "./HomePanel.styles"

const HomePanel = () => {
    const cards = new Array(6)
    cards.fill("str")
    
    return (
        <HomePanelWrapper>
            <Header />
            <Card cards={cards}/>
        </HomePanelWrapper>
    )
}

export default HomePanel