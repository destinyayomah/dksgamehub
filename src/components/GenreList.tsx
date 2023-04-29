import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres"
import getCroppedImageUrl from "../services/get-cropped-image-url";

const GenreList = () => {
    const { data } = useGenre();

    return (
        <List>
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