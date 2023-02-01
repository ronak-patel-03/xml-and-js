<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
<xsl:template match="/"> 
    <html>
        <body>
            <h1>Products List</h1>
            <h2>Table 1</h2>
            <table border='2'>
                <tr>
                    <td>Product Name</td>
                    <td>Manufacturer Id</td>
                    <td>Description</td>
                    <td>USD Price</td>
                </tr>
                <xsl:for-each select="products/product[@shippable='true']"> 
                <tr>
                    <td><xsl:value-of select="productName"/></td>
                    <td><xsl:value-of select="manufacturer/@id"/></td>
                    <td><xsl:value-of select="description"/></td>
                    <td><xsl:value-of select="prices/price[1]"/></td>
                </tr>
            </xsl:for-each>
            </table>

            <h2>Table 2</h2>
            <table border ='2'>
                <tr>
                    <td>Product Name</td>
                    <td>Description</td>
                    <td>USD Price</td>
                    <td>Euro Price</td>
                </tr>
                <xsl:for-each select="products/product/manufacturer[@id='acme']/.."> 
                <tr>
                    <td><xsl:value-of select="productName"/></td>
                    <td><xsl:value-of select="description"/></td>
                    <td><xsl:value-of select="prices/price[1]"/></td>
                    <td><xsl:value-of select="prices/price[3]"/></td>
                </tr>
            </xsl:for-each>
            </table>
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>