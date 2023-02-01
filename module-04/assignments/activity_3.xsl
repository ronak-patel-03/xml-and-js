<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 

<xsl:template match="/"> 
    <html>
    
        <body>
            <h3>Activity 3</h3>
            <ul style="color: orange">
                <h4>Product Name</h4>
            </ul>
            <ul style="color: orange">
                <xsl:for-each select="products/product">
                    <h4><xsl:value-of select="productName"/></h4>
                </xsl:for-each>
            </ul>
        </body>
    </html>
</xsl:template>  
</xsl:stylesheet>
