import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/get-cropped-image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
    onSelectedGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectedGenre }: Props) => {
    const { data, isLoading, error } = useGenre();
    const genreSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <List>
            {error && genreSkeletons.map(genreSkeleton =>
                <ListItem key={genreSkeleton} paddingY='10px'>
                    <GenreSkeleton />
                </ListItem>)}

            {isLoading && genreSkeletons.map(genreSkeleton =>
                <ListItem key={genreSkeleton} paddingY='10px'>
                    <GenreSkeleton />
                </ListItem>)}

            {data.map(genre =>
                <ListItem key={genre.id} paddingY='10px'>
                    <HStack>
                        <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} borderRadius={3} />
                        <Button variant='link' onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList