import { ThemeContext } from '../../theme-context';
import { useContext } from "react";
import { BoxOne, BoxTwo, BoxThree, BoxFour } from './styles';

export const BackgroundShapes = () => {
    const { theme, changeOpacity } = useContext(ThemeContext);

    return (
        <>
            <BoxOne theme={theme} onMouseOver={changeOpacity} onMouseOut={changeOpacity}></BoxOne>
            <BoxTwo theme={theme} onMouseOver={changeOpacity} onMouseOut={changeOpacity}></BoxTwo>
            <BoxThree theme={theme} onMouseOver={changeOpacity} onMouseOut={changeOpacity}></BoxThree>
            <BoxFour theme={theme} onMouseOver={changeOpacity} onMouseOut={changeOpacity}></BoxFour>
        </>
    )
}