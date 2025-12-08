import express,{Request,Response} from 'express';
const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req: Request,res: Response) =>{
    res.sendStatus(203);
})

app.post('/test',(req: Request,res: Response) =>{
    let body  = req.body
    res.send(body);
})


app.put('/test/:id',(req: Request,res: Response) =>{
    let params  = req.params
    res.send(body);
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})