import { IWidgetConfig } from "./mount";
import styled from 'styled-components';

const Container = styled.div<{
    $bg?: string;
    $height?: number;
}>`
    width: 100vw;
    background-color: ${props => props.$bg || '#515151'};
    height: ${props => `${props.$height}px` || '10px'};
`;

const ProgressFill = styled.div<{
    $color?: string;
    $fillWidth: number;
}>`
    background-color: ${props => props.$color || '#36a852'};
    width: ${props => `${props.$fillWidth}%` || '0%'};;
    height: 100%;
`;

export function ReadingBar({
    bg,
    color,
    height
}: IWidgetConfig) {
    console.log(bg, color, height)
    return (
        <Container $bg={bg} $height={height}>
            <ProgressFill $color={color} $fillWidth={20} />
        </Container>
    );
};
