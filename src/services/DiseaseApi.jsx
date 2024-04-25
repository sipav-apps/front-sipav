const DiseaseAPI = () => {
    const getAllDiseases = async () => {
        try {
            const token = localStorage.getItem('@sipavAccessToken');

            if (!token) {
                throw new Error('Authorization token not found');
            }


            const allDiseasesUrl = 'http://localhost:8000/diseases/';
    
            const response = await fetch(allDiseasesUrl);
    
            if (!response.ok) {

                throw new Error(`Failed to fetch diseases: ${response.status} ${response.statusText}`);
            }

            const responseData = await response.json();
    
            return responseData;
        } catch (error) {
            console.error('Failed to fetch diseases:', error.message);
            throw error;
        }
    };

    return {getAllDiseases}
}

export default DiseaseAPI