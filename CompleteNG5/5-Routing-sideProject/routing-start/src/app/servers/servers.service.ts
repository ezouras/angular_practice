export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    console.log("in get server function and id is: ",id);
    const server = this.servers.find(//loops thru the servers.
      (s) => {
        return s.id === id;//returns the server object if id's match
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {//if a server with that id is found
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
