import { useState } from "react";
import { Container, VStack, Text, Select, Box, Heading, SimpleGrid, Card, CardBody } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering" },
  { id: 2, title: "Product Manager", category: "Product" },
  { id: 3, title: "UI/UX Designer", category: "Design" },
  { id: 4, title: "Backend Developer", category: "Engineering" },
  { id: 5, title: "Graphic Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("");

  const filteredJobs = filter ? jobs.filter(job => job.category === filter) : jobs;

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Remote Tech Jobs</Heading>
        <Text fontSize="lg" textAlign="center">Find your next remote job in tech. Filter by category to get started.</Text>
        <Select placeholder="Filter by category" onChange={(e) => setFilter(e.target.value)}>
          <option value="Product">Product</option>
          <option value="Design">Design</option>
          <option value="Engineering">Engineering</option>
        </Select>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
          {filteredJobs.map(job => (
            <Card key={job.id} borderWidth="1px" borderRadius="lg">
              <CardBody>
                <Text fontSize="xl">{job.title}</Text>
                <Text fontSize="md" color="gray.500">{job.category}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;