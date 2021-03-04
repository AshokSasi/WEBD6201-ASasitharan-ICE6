"use strict";


let activeLink = "";

(function (core) 
{
    class Router 
    {
        //constructors
        constructor() 
        {
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
        //Private Methods
        //Public Methods
        AddRoute(route) 
        {
            this.m_routingTable.push(route);
        }
        Find(route) 
        {
            return this.m_routingTable.indexOf(route);
        }
        Remove(route) 
        {
            if (this.Find(route) > -1) 
            {
                this.m_routingTable = this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }
    }
    core.Router = Router;
})(core || (core = {}));