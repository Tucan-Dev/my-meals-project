import React from "react";

import {
    Container,
    Day,
    SelectedVisible
} from './styles';

interface Day {
    day: string;
    selected: boolean;
}

interface Props {
    data: Day;
    onPress: () => void;
}  

export function DayWeekSelected({ data, onPress }: Props){

    return(
        <Container
            onPress={onPress}
        >
           <Day selected={data.selected}>
                {data.day}
           </Day>

           <SelectedVisible selected={data.selected} />
        </Container>
    );
}