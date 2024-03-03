"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


export default function ShowCase() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="pt-5"
        >
            <CarouselContent>
                <CarouselItem>
                    <img src="board.png" />
                </CarouselItem>
                <CarouselItem>
                    <img src="board-drag.png" />
                </CarouselItem>
                <CarouselItem>
                    <img src="board-delete.png" />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}