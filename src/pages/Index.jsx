import { useState } from "react";
import { Container, VStack, Text, Button, HStack, Box, Heading, StackDivider } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering" },
  { id: 2, title: "Product Manager", category: "Product" },
  { id: 3, title: "UI/UX Designer", category: "Design" },
  { id: 4, title: "Backend Developer", category: "Engineering" },
  { id: 5, title: "Graphic Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.category === filter);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} divider={<StackDivider borderColor="gray.200" />}>
        <Heading as="h1" size="xl">Remote Tech Jobs</Heading>
        <Text fontSize="lg">Find your next remote job in tech. Filter by category:</Text>
        <HStack spacing={4}>
          <Button colorScheme="teal" variant={filter === "All" ? "solid" : "outline"} onClick={() => setFilter("All")}>All</Button>
          <Button colorScheme="teal" variant={filter === "Product" ? "solid" : "outline"} onClick={() => setFilter("Product")}>Product</Button>
          <Button colorScheme="teal" variant={filter === "Design" ? "solid" : "outline"} onClick={() => setFilter("Design")}>Design</Button>
          <Button colorScheme="teal" variant={filter === "Engineering" ? "solid" : "outline"} onClick={() => setFilter("Engineering")}>Engineering</Button>
        </HStack>
        <VStack spacing={3} align="stretch" width="100%">
          {filteredJobs.map(job => (
            <Box key={job.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="lg">{job.title}</Heading>
              <Text mt={2}>Category: {job.category}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;