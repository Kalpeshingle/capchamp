using {sap.cap.productshop as my} from '../db/sch';

service productshop {

entity Products as projection on my.Products;

}