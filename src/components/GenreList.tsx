import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres"
import getCroppedImageUrl from "../services/get-cropped-image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
    const { data, isLoading, error } = useGenre();
    const genreSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



    return (
        <List>
            {error && genreSkeletons.map(genreSkeleton =>
                <ListItem key={genreSkeleton} paddingY='10px'>
                    <GenreSkeleton  />
                </ListItem>)}

            {isLoading && genreSkeletons.map(genreSkeleton =>
                <ListItem key={genreSkeleton} paddingY='10px'>
                    <GenreSkeleton />
                </ListItem>)}

            {data.map(genre =>
                <ListItem key={genre.id} paddingY='10px'>
                    <HStack>
                        <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} borderRadius={3} />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList