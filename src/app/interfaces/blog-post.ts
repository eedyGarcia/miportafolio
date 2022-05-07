export interface BlogPost {
    id_post:       string;
    id_usuario:    string;
    id_categoria:  string;
    imagen:        string;
    titulo:        string;
    resumen:       string;
    contenido:     string;
    status:        string;
    fecha:         Date;
    actualizacion: Date;
}