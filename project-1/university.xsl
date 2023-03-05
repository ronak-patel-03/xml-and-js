<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/"> 
        <html>
            <head>
                <link rel="stylesheet" href="./university.css"/>
            </head>
            <body>
                <p>University Details</p>
                <p>Using XSL</p>
                <table>
                        <tr id="titlecol">
                            <th>Name</th>
                            <th>Address</th>
                            <th>Courses</th>
                            <th>Students</th>
                            <th>Faculties</th>
                        </tr>
                    <xsl:for-each select="UniversitiesData/University"> 
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td>
                                <xsl:value-of select="concat(address/streetAddress, ', ' , address/city, ', ' , address/region, ', ' , address/country, ' - ' , address/zipCode)"/>
                            </td>
                            <td id="courses">
                                <table class="inner">
                                        <tr id="titlecol">
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                        </tr>
                                    <xsl:for-each select="courses"> 
                                        <tr>
                                            <td><xsl:value-of select="id"/></td>
                                            <td><xsl:value-of select="title"/></td>
                                            <td><xsl:value-of select="description"/></td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                            <td id="students">
                                <table class="inner">
                                        <tr id="titlecol">
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Dob</th>
                                            <th>Email</th>
                                        </tr>
                                    <xsl:for-each select="students"> 
                                        <tr>
                                            <td><xsl:value-of select="id"/></td>
                                            <td>
                                                <xsl:value-of select="concat(firstName,' ',lastName)"/>
                                            </td>
                                            <td><xsl:value-of select="dob"/></td>
                                            <td><xsl:value-of select="email"/></td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                            <td id="faculty">
                                <table class="inner">
                                        <tr id="titlecol">
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                        </tr>
                                    <xsl:for-each select="faculty"> 
                                        <tr>
                                            <td><xsl:value-of select="id"/></td>
                                            <td>
                                                <xsl:value-of select="concat(firstName,' ',lastName)"/>
                                            </td>
                                            <td><xsl:value-of select="email"/></td>
                                            <td><xsl:value-of select="phoneNumber"/></td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>