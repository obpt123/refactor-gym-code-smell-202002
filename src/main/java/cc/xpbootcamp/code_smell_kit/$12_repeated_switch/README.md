## 重复的switch

举例1:
对`region_code2`的多次判断.
From [github](https://github.com/PlanetacraftBR/CHProject/blob/b33ac681e3e349f759c3ef026672ec98ab922111/src/main/java/me/security/GeoIP/regionName.java)

```java
package me.security.GeoIP;

public class regionName {
    public static String regionNameByCode(String countryCode, String regionCode) {

        if (regionCode == null) { return null; }
        if (regionCode.length() == 0) { return null; }

        String name = null;
        int region_code2 = -1;
        if (    ((regionCode.charAt(0) >= 48 ) && ( regionCode.charAt(0) < ( 48 + 10 )))
             && ((regionCode.charAt(1) >= 48 ) && ( regionCode.charAt(1) < ( 48 + 10 )))
        ){
            // only numbers, that shorten the large switch statements
            region_code2 = (regionCode.charAt(0)- 48) * 10 + regionCode.charAt(1) - 48;
        } else if (    (    ((regionCode.charAt(0) >= 65) && (regionCode.charAt(0) < (65 + 26)))
                     || ((regionCode.charAt(0) >= 48) && (regionCode.charAt(0) < (48 + 10))))
                && (    ((regionCode.charAt(1) >= 65) && (regionCode.charAt(1) < (65 + 26)))
                     || ((regionCode.charAt(1) >= 48) && (regionCode.charAt(1) < (48 + 10))))
        ) {

            region_code2 = (regionCode.charAt(0) - 48) * (65 + 26 - 48) + regionCode.charAt(1) - 48 + 100;
        }

        if (region_code2 == -1) {return null;}

        if (countryCode.equals("AD")) {
            switch (region_code2) {
                case 2:
                    return "Canillo";
                case 3:
                    return "Encamp";
                case 4:
                    return "La Massana";
                case 5:
                    return "Ordino";
                case 6:
                    return "Sant Julia de Loria";
                case 7:
                    return "Andorra la Vella";
                case 8:
                    return "Escaldes-Engordany";
            }
        } else if (countryCode.equals("AE")) {
            switch (region_code2) {
                case 1:
                    return "Abu Dhabi";
                case 2:
                    return "Ajman";
                case 3:
                    return "Dubai";
                case 4:
                    return "Fujairah";
                case 5:
                    return "Ras Al Khaimah";
                case 6:
                    return "Sharjah";
                case 7:
                    return "Umm Al Quwain";
            }
        } else if (countryCode.equals("AF")) {
            switch (region_code2) {
                case 1:
                    return "Badakhshan";
                case 2:
                    return "Badghis";
                case 3:
                    return "Baghlan";
                case 5:
                    return "Bamian";
                case 6:
                    return "Farah";
                case 7:
                    return "Faryab";
                case 8:
                    return "Ghazni";
                case 9:
                    return "Ghowr";
                case 10:
                    return "Helmand";
                case 11:
                    return "Herat";
                case 13:
                    return "Kabol";
                case 14:
                    return "Kapisa";
                case 17:
                    return "Lowgar";
                case 18:
                    return "Nangarhar";
                case 19:
                    return "Nimruz";
                case 23:
                    return "Kandahar";
                case 24:
                    return "Kondoz";
                case 26:
                    return "Takhar";
                case 27:
                    return "Vardak";
                case 28:
                    return "Zabol";
                case 29:
                    return "Paktika";
                case 30:
                    return "Balkh";
                case 31:
                    return "Jowzjan";
                case 32:
                    return "Samangan";
                case 33:
                    return "Sar-e Pol";
                case 34:
                    return "Konar";
                case 35:
                    return "Laghman";
                case 36:
                    return "Paktia";
                case 37:
                    return "Khowst";
                case 38:
                    return "Nurestan";
                case 39:
                    return "Oruzgan";
                case 40:
                    return "Parvan";
                case 41:
                    return "Daykondi";
                case 42:
                    return "Panjshir";
            }
        } 
        ...
    }
}
```