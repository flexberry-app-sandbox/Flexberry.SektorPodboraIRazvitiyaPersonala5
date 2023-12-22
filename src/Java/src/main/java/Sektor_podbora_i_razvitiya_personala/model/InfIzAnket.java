package Sektor_podbora_i_razvitiya_personala.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Sektor_podbora_i_razvitiya_personala.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ИнфИзАнкет
 */
@Entity(name = "IISSektor_podbora_i_razvitiya_personalaИнфИзАнкет")
@Table(schema = "public", name = "ИнфИзАнкет")
public class InfIzAnket {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Specialist")
    @Convert("Specialist")
    @Column(name = "Специалист", length = 16, unique = true, nullable = false)
    private UUID _specialistid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Specialist", insertable = false, updatable = false)
    private Specialist specialist;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Ankety")
    @Convert("Ankety")
    @Column(name = "Анкеты", length = 16, unique = true, nullable = false)
    private UUID _anketyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Ankety", insertable = false, updatable = false)
    private Ankety ankety;


    public InfIzAnket() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}