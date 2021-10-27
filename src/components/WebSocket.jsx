export const ws = new WebSocket('wss://misterio-famaf.herokuapp.com/ws')

const isOpenWs = (ws) => {
    return ws.readyState === ws.OPEN;
};

export const send_ = (ws, action, player_name, lobby_name) => {

    const takes = {
        'action': action,
        'player_name': player_name,
        'lobby_name': lobby_name
    };

    if (!isOpenWs(ws)) return;
    ws.send(JSON.stringify(takes));

};
