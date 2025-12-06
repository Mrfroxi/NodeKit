import express,{Request,Response} from 'express';
const app = express();
const port = process.env.PORT || 3003;


app.get('/',(req: Request,res: Response) =>{
    res.send('trySend');
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})