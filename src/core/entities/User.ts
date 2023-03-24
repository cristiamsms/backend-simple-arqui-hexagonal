export interface User {
    
    name:string;
    password:string;
    nickname:string;
    team:Team;
    last_connection?:Date;

}
type Team = 'rojo' | 'azul' | 'amarillo';
export interface Res{
    ok:boolean;
    msg?:string;
    token?:string;
    data?:any;
}