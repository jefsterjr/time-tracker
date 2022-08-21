export enum TipoNotificacao{
    SUCESSO, FALHA, ATENCAO
}
export default interface INotificacao {
    titulo: string
    mensagem: string
    tipo: TipoNotificacao
    id: number
}