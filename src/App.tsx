import {Box, Button, ButtonGroup, Grid, GridItem, HStack, Show} from '@chakra-ui/react'
import './App.css'
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import {Platform} from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
    sortOrder: string
    searchText: string
}

function App() {

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return <>
        <Grid
            templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '280px 1fr'
            }}
        >
            <GridItem area="nav">
                <NavBar onSearch={(searchText: string) => setGameQuery({...gameQuery, searchText})}></NavBar>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5} paddingY={1}>
                    <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}></GenreList>
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={3}>
                    <GameHeading gameQuery={gameQuery} />
                    <HStack>
                        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform: Platform) => setGameQuery({...gameQuery, platform})} />
                        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder: string) => setGameQuery({...gameQuery, sortOrder})} />
                    </HStack>
                </Box>
                <GameGrid gameQuery={gameQuery}></GameGrid>
            </GridItem>
        </Grid>
    </>
}

export default App
