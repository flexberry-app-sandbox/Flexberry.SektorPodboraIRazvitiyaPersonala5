package Sektor_podbora_i_razvitiya_personala.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Sektor_podbora_i_razvitiya_personala.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Рекомендац
 */
@Entity(name = "IISSektor_podbora_i_razvitiya_personalaРекомендац")
@Table(schema = "public", name = "Рекомендац")
public class Rekomendac {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Руководители")
    private String руководители;

    @Column(name = "Рабочие")
    private String рабочие;

    @Column(name = "Специалисты")
    private String специалисты;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PrichUvolIRekom")
    @Convert("PrichUvolIRekom")
    @Column(name = "ПричУволИРеком", length = 16, unique = true, nullable = false)
    private UUID _prichuvolirekomid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PrichUvolIRekom", insertable = false, updatable = false)
    private PrichUvolIRekom prichuvolirekom;


    public Rekomendac() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getРуководители() {
      return руководители;
    }

    public void setРуководители(String руководители) {
      this.руководители = руководители;
    }

    public String getРабочие() {
      return рабочие;
    }

    public void setРабочие(String рабочие) {
      this.рабочие = рабочие;
    }

    public String getСпециалисты() {
      return специалисты;
    }

    public void setСпециалисты(String специалисты) {
      this.специалисты = специалисты;
    }


}