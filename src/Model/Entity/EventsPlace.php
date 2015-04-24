<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * EventsPlace Entity.
 */
class EventsPlace extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * @var array
     */
    protected $_accessible = [
        'event_id' => true,
        'place_id' => true,
        'coordinations' => true,
        'event' => true,
        'place' => true,
    ];
}
