import { createServer } from "miragejs"


function mockServer() {
  
    let server = createServer(
        {
            routes(){
                this.urlPrefix = "http://www.kingatest.com";
                this.namespace = "/v1/api";
                this.timing = 5000

                this.get("/books", () => {
                    return [
                        {title: "Pride and Prejudice", author: "Jane Austen", year: 1813},
                        {title: "Wuthering Heights", author: "Emily Bronte", year: 1847},
                        {title: "Jane Eyre", author: "Charlotte Bronte", year: 1847}
                    ]
                })
            }
        }
    )

    return server
}

export default mockServer
