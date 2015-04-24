<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Event Entity.
 */
class Event extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * @var array
     */
    protected $_accessible = [
        'name' => true,
        'description' => true,
        'link' => true,
        'sequence' => true,
        'chapter_id' => true,
        'chapter' => true,
        'character_change_versions' => true,
        'character_changes' => true,
        'event_places' => true,
        'event_versions' => true,
        'map_change_versions' => true,
        'map_changes' => true,
        'place_change_versions' => true,
        'place_changes' => true,
    ];
}
