import { useEffect, useState } from "react";
import { IWidgetConfig } from "./mount";
import styled from 'styled-components';

const Container = styled.div<{
    $bg?: string;
    $height?: number;
}>`
    position: fixed;
    width: 100vw;
    background-color: ${props => props.$bg || '#515151'};
    height: ${props => `${props.$height}px` || '10px'};
    z-index: 10;
`;

const ProgressFill = styled.div.attrs<{ $color?: string; $fillWidth: number }>(props => ({
    style: {
        backgroundColor: props.$color,
        width: `${props.$fillWidth}%`,
    }
}))`
    height: 100%;
  `;

export function ReadingBar({
    bg,
    color,
    height
}: IWidgetConfig) {
    const [scrollPercent, setScrollPercent] = useState(0);
    const calculateScroll = () => {
        const scrollPercentage = pageYOffset * 100 / (document.body.scrollHeight - document.body.offsetHeight);
        setScrollPercent(scrollPercentage);
    }
    useEffect(() => {
        window.addEventListener('scroll', calculateScroll);
        return () => {
            window.removeEventListener('scroll', calculateScroll);
        }
    }, [])
    return (
        <Container $bg={bg} $height={height}>
            <ProgressFill $color={color} $fillWidth={scrollPercent} />
        </Container>
    );
};
