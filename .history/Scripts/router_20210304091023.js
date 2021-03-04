"use strict";




(function (core) 
{
    class Router 
    {
        //constructors
        constructor() 
        {
            this.ActiveLink="";
        }
        //public properties
        get ActiveLink() 
        {
            return this.m_activeLink;
        }
        set ActiveLink(link) 
        {
            this.m_activeLink = link;
        }
 \
        //Public Methods
        /**
         *Adds a new route to the routing table
         *
         * @param {string} route
         * @returns {void}
         * @memberof Router
         */
        Add(route) 
        {
            this.m_routingTable.push(route);
        }

        /**
         * This replaces the current routing table with a new one
         * Routes should begin with / character
         * @param {string} routingTable 
         * @returns {void}
         */
        AddTable(routingTable) 
        {
            this.m_routingTable = routingTable;
        }
        /**
         * this method finds the index of the route in the routing table
         * otherwise it returns -1 if the route is not found
         * @param {string} route 
         * @returns {number}
         */
        Find(route) 
        {
            return this.m_routingTable.indexOf(route);
        }
        
        /**
         *This method removes a route from the Routing table
         *
         * @param {string} route
         * @return {boolean} 
         * @memberof Router
         */
        Remove(route) 
        {
            if (this.Find(route) > -1) 
            {
                this.m_routingTable = this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        /**
         *This method returns the routing table as a comma separated string
         *
         * @return {string} 
         * @memberof Router
         */
        ToString()
        {
            return this.m_routingTable.toString();
        }
    }
    core.Router = Router;
})(core || (core = {}));

let router = new core.Router();

router.AddTable(["/","/home", "/about","/services","/contact","/contact-list","/projects","/register","/login","/edit"]);
console.log(router.ToString());