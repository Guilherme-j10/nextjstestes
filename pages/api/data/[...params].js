const posts = {
    'id1': {
        namePost: 'Como fazer bolo eeee'
    }
}

// os tres pontos faz pegar todos os parametros

export default function IdPost(req, res){
    const {
        query: { params },
    } = req;


    res.json(posts[params[0]]);
}