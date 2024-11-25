import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import croppedImageUrl from "../services/cropped-image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

    const { data, error, isLoading } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />

    return <>
        <Heading fontSize='2xl' marginBottom={2}>Genres</Heading>
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image
                            src={croppedImageUrl(genre.image_background)}
                            boxSize='32px'
                            borderRadius={8}
                            objectFit='cover'
                        />
                        <Button
                            whiteSpace='normal'
                            textAlign='left'
                            fontWeight={selectedGenre?.id === genre.id? 'bold' : 'normal'}
                            onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>))}
        </List>
    </>
}

export default GenreList;
