import React, { useEffect, useState } from 'react'
import { 
  Flex,
  Text,
  Select
} from '@chakra-ui/react'
import { GoArrowRight } from 'react-icons/go'
import DiseaseAPI from '../../services/DiseaseApi.jsx';
import CustomBox from '../../components/CustomBox/index.jsx';
import { useNavigate } from 'react-router-dom';
import api from '../../services/Api';

const Home = () => {
  const [diseases, setDiseases] = useState([])
  const [user, setUser] = useState([])

  const userData = JSON.parse(localStorage.getItem("@sipavUser"));
  
  const { getAllDiseases } = DiseaseAPI();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get(`/user/${userData.id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    }

    fetchUserData();
}, []);

  useEffect(() => {
    if (localStorage.getItem('@sipavAccessToken') === null) {
      navigate("/login")
    } else {
      const fetchDiseases = async () => {
        try {
          const diseasesData = await getAllDiseases();

          console.log(diseasesData)

          setDiseases(diseasesData);
        } catch (error) {
          console.error('Failed to fetch diseases:', error.message);
        }
      };

      async function fetchUserData() {
        try {
          console.log('entrou')
          const response = await api.get(`/user/${userData.id}`);
          setUser(response.data);
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error);
        }
      }

      fetchDiseases();

      fetchUserData();
    }

  }, []);

  return (
    <Flex
      backgroundColor="#F0F1F3"
      width="36%"
      pt={"2rem"}
      mt={"2rem"}
      borderRadius="30px"
      flexDirection="column"
      alignItems="center"
      boxShadow="dark-lg"
      height="100%"
      pb="1rem"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        w="80%"
        flexDir="column"
      >
        <Text
          fontSize="xl"
          color="primary.600"
          fontWeight="semibold"
        >
          Lista de vacinas
        </Text>
        <Select
          fontSize="xl"
          color="primary.600"
          fontWeight="semibold"
          width="80%"
          borderColor="primary.600"
          mt="1rem"
        >
          <option value={user?.id}>{user.name}</option>
          {user?.dependents?.map((dependent, index) => (
            <option key={index} value={dependent?.id}>{dependent?.name}</option>
          ))}
        </Select>
      </Flex>
      <Flex
        height="100%"
        width="80%"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        mt="1rem"
        overflowY="auto"
        maxH="300px"
        minH="100px"
        marginBottom="2rem"
        borderRadius="1rem"
        px="1rem"
        py="1rem"
        sx={{
          "&::-webkit-scrollbar": {
            marginLeft: "1rem",
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#088395",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#0A4D68",
          },
        }}
      >
        {diseases.map((disease, index) => (
          <CustomBox
            key={index}
            text={disease.name}
            firstImage={
              <GoArrowRight
                size={30}
                color='#088395'
                cursor={"pointer"}
                onClick={() => navigate(`/disease/${index+1 }`)}
              />
            }
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Home