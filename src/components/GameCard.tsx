import {Game} from "../hooks/useGames";
import {Card, CardBody, CardFooter, CardHeader, HStack, Image, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import croppedImageUrl from "../services/cropped-image-url";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {

    return <Card>
        <Image src={croppedImageUrl(game.background_image)}></Image>
        <Text padding={2}>{game.name}</Text>

        <HStack padding={2} justifyContent='space-between'>
            <PlatformIconList platforms={game.platforms.map(({platform}) => platform)}></PlatformIconList>

            <CriticScore score={game.metacritic}/>
        </HStack>
    </Card>
}

export default GameCard;
