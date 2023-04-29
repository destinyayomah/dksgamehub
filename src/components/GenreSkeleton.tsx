import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react"

const GenreSkeleton = () => {
    return (
        <Card background={"transparent"} boxShadow={"none"}>
            <HStack>
                <Skeleton width='44px' height='32px' />
                <SkeletonText noOfLines={1} skeletonHeight='20px' width='100%' spacing={1} />
            </HStack>
        </Card>
    )
}

export default GenreSkeleton