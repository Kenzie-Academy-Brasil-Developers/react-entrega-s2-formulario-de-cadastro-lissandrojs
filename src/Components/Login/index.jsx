import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom";
import { Container,Typography,Button , Avatar ,Box} from '@mui/material';
import svg from  '../../styles/Onboarding.svg'
const Log =()=>{
    const {name } = useParams()
    const history = useHistory()
    return (
        <Container maxWidth={false} sx={{
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           alignItems: "center",
            height: 700,
            background: "#15072c",
            color:"white"}}>
            <Typography sx={{fontSize:24}}>
             Bem-vindo  {name}!
            </Typography>
            <Box>
            
            <Avatar sx={{width:400,height:400}} alt="Trevor Henderson" src={svg} />
           
            <Button sx={{height:40 , display:"flex",alignItems:"flex-end"}} onClick={()=>{history.push("/")}} variant="outlined">Home</Button>
                
              
            </Box>
        </Container>
    )
}
export default Log