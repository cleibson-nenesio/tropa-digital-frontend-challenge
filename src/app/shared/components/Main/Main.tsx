import { WrapperMain } from "./Main.styles"


type WrapperMainProps = {
    children: React.ReactNode,
    bgColor: string
}

const Main = ({ children, bgColor }: WrapperMainProps) => (
    <WrapperMain bgColor={bgColor}>
        {children}
    </WrapperMain>
)

export default Main